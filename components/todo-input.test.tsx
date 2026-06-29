import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoInput } from "@/components/todo-input";

describe("TodoInput 우선순위 선택", () => {
  it("기본 우선순위는 '보통'이 선택되어 있다", () => {
    render(<TodoInput onAdd={vi.fn()} />);

    expect(screen.getByRole("radio", { name: "보통" })).toHaveAttribute(
      "aria-checked",
      "true"
    );
    expect(screen.getByRole("radio", { name: "높음" })).toHaveAttribute(
      "aria-checked",
      "false"
    );
  });

  it("우선순위를 클릭하면 선택 상태가 바뀐다", async () => {
    const user = userEvent.setup();
    render(<TodoInput onAdd={vi.fn()} />);

    await user.click(screen.getByRole("radio", { name: "높음" }));

    expect(screen.getByRole("radio", { name: "높음" })).toHaveAttribute(
      "aria-checked",
      "true"
    );
    expect(screen.getByRole("radio", { name: "보통" })).toHaveAttribute(
      "aria-checked",
      "false"
    );
  });

  it("Enter로 제출하면 입력값과 선택한 우선순위로 onAdd를 호출한다", async () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();
    render(<TodoInput onAdd={onAdd} />);

    await user.click(screen.getByRole("radio", { name: "낮음" }));
    await user.type(
      screen.getByRole("textbox", { name: "새 할 일" }),
      "장보기{Enter}"
    );

    expect(onAdd).toHaveBeenCalledExactlyOnceWith("장보기", "low", undefined);
  });

  it("제출 후 우선순위가 기본값('보통')으로 초기화된다", async () => {
    const user = userEvent.setup();
    render(<TodoInput onAdd={vi.fn()} />);

    await user.click(screen.getByRole("radio", { name: "높음" }));
    await user.type(
      screen.getByRole("textbox", { name: "새 할 일" }),
      "장보기{Enter}"
    );

    expect(screen.getByRole("radio", { name: "보통" })).toHaveAttribute(
      "aria-checked",
      "true"
    );
  });
});

describe("TodoInput 마감일", () => {
  it("마감일을 입력하면 onAdd에 마감일이 함께 전달된다", async () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();
    render(<TodoInput onAdd={onAdd} />);

    fireEvent.change(screen.getByLabelText("마감일"), {
      target: { value: "2026-07-01" },
    });
    await user.type(
      screen.getByRole("textbox", { name: "새 할 일" }),
      "회의{Enter}"
    );

    expect(onAdd).toHaveBeenCalledExactlyOnceWith("회의", "medium", "2026-07-01");
  });

  it("마감일을 비워두면 마감일 없이 onAdd를 호출한다", async () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();
    render(<TodoInput onAdd={onAdd} />);

    await user.type(
      screen.getByRole("textbox", { name: "새 할 일" }),
      "회의{Enter}"
    );

    expect(onAdd).toHaveBeenCalledExactlyOnceWith("회의", "medium", undefined);
  });

  it("제출 후 마감일 입력이 초기화된다", async () => {
    const user = userEvent.setup();
    render(<TodoInput onAdd={vi.fn()} />);

    const dueInput = screen.getByLabelText("마감일") as HTMLInputElement;
    fireEvent.change(dueInput, { target: { value: "2026-07-01" } });
    await user.type(
      screen.getByRole("textbox", { name: "새 할 일" }),
      "회의{Enter}"
    );

    expect(dueInput.value).toBe("");
  });
});

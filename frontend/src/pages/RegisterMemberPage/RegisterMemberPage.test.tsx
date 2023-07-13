import { render } from "@testing-library/react";
import RegisterMemberPage from "./RegisterMemberPage";

describe('test', () => {
  test('렌더링 테스트', () => {
    // given
    render(<RegisterMemberPage />);
    
    // when
    
    // then
    expect(1).toBe(1);
    
  });
})
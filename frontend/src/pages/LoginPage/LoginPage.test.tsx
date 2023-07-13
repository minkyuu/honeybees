import {render, screen} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import '@testing-library/jest-dom';
import LoginPage from './LoginPage';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';


describe('로그인 테스트', () => {
  test('', () => {
    const queryClient = new QueryClient();
    // given
    // render(<LoginPage />); // 에러코드
    // render(<LoginPage />, {wrapper: BrowserRouter}); // https://testing-library.com/docs/example-react-router/
    render(
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </QueryClientProvider>
    );
    // console.log(screen.getByText(''));

    
    console.log('테스트 중~~');
    // when
    
    // then
    
  });
})
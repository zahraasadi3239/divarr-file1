
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import defaultOptions from "./configs/reactQuery";
import Layout from "./layouts/Layout";
import Router from "./router/Router";



function App() {
 const queryClient =new QueryClient({defaultOptions});
  return (
    <QueryClientProvider client={queryClient}>
<BrowserRouter>
<Layout>
  <Router/>
</Layout>

 </BrowserRouter>
 <ReactQueryDevtools />
    </QueryClientProvider>
 
  )
}

export default App;

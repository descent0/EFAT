import { Provider } from "react-redux";
import FormInput from "./Components/FormInput";
import { EfatLanding } from "./Components/Home";
import Result from "./Components/Result";
import { store } from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./Components/SignIn/SignInPage";
import SignUpForm from "./Components/SignIn/SignUpForm";
import SignInForm from './Components/SignIn/LoginForm'
import Profile from "./Components/SignIn/Profile";


const route = createBrowserRouter([
    {
        path: "/",
        element: <EfatLanding />
    },
    {
        path: "/user",
        element: < SignInPage/>,
        children:[{
            path:"signup",
            element:<SignUpForm/>
        },{
            path:"signin",
            element:<SignInForm/>
        }
],
    },
    {
        path:"/profile",
        element:<Profile/>
    },
    {
        path: "/detail",
        element: <FormInput />
    },
    {
        path: "/result",
        element: <Result />
    }
]);

export const AppRouter = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={route} />
        </Provider>
    );
};

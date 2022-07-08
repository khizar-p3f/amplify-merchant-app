import React, { useEffect, useState } from "react";
import { Col, Layout, Row, Button, Checkbox, Form, Input, Space, Alert } from "antd";
const { Content, Footer } = Layout;

import "../theme/index.less";
import img2 from "../assets/images/svg8.svg";
import LandingPageHeader from "../component/header";
import SimpleLineIcon from "react-simple-line-icons";
import { Auth, Hub } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

const LandingSignupPage = () => {

    const initialState = {
        page: 0,
        user: null,
        loginData: {},
        loginError: null,
        signupError: null,
        loginForm: {
            email: null,
            password: null,
        },
        signupForm: {
            username:null,
            phone_number:null,
            email: null,
            password: null,
        },
    };
    const [state, setState] = useState({
        ...initialState,
    });
    

    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
        switch (event) {
            case "signIn":
                //setUser(data);
                setState({ ...state, user: data });
                break;
            case "signOut":
                //setUser(null);
                setState({ ...state, user: null });
                break;
            case "customOAuthState":
                setState({ ...state, user: data });
            //setCustomState(data);
        }
    });

    return (
        <Layout className="layout">
            <LandingPageHeader />
            <section className="signup">
                <Content>
                    <div className="container">
                        <Row align="middle" gutter={[16, 16]}>
                            <Col span={12}>
                                <img src={img2} height={500} />
                            </Col>
                            <Col span={12}>
                                <div className="form-box">
                                    {state.page == 0 ? <LoginSection state={state} setState={setState} /> : <SignupSection state={state} setState={setState}  />}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </section>
            <Footer
                style={{
                    textAlign: "center",
                }}
            >
                P3Fusion LLC 2022
            </Footer>
        </Layout>
    );
};

export default LandingSignupPage;

const SignupSection=(props)=>{
    const {state, setState}=props
    const signUp = () => {
        try {
            const { signupForm } = state 
            Auth.signUp({
                
                username:signupForm.email,
                email:signupForm.email,
                password:signupForm.password,
                attributes: {
                    name:signupForm.name,
                    email:signupForm.email,
                    phone_number:signupForm.phone_number
                }                
            }).then((user)=>{
                console.log({user});
            })

        } catch (error) {
            console.log('error signing up:', error);
        }
    }
    return(
        <section>
        <h1>Sigin Up</h1>
        <h2>Already have an account <a onClick={() => setState({ ...state, page: 0 })}>Signin</a>  </h2>
        <p>
            Here's my recent exploration. What do you think? Give your
            opinion in the comments below!
        </p>
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                        ]}
                    >
                        <Input
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    signupForm: {
                                        ...state.signupForm,
                                        name: e.target.name,
                                    },
                                })
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
                            },
                        ]}
                    >
                        <Input
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    signupForm: {
                                        ...state.signupForm,
                                        email: e.target.value,
                                    },
                                })
                            }
                        />
                    </Form.Item>

                    <Form.Item
                       
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password  onChange={(e) =>
                            setState({
                                ...state,
                                signupForm: {
                                    ...state.signupForm,
                                    password: e.target.value,
                                },
                            })
                        } />
                    </Form.Item>
                    <Form.Item
                        
                        label="phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: "Please input your phone!",
                            },
                        ]}
                    >
                        <Input onChange={(e) =>
                            setState({
                                ...state,
                                signupForm: {
                                    ...state.signupForm,
                                    phone_number: e.target.value,
                                },
                            })
                        } />
                    </Form.Item>

                    {state.signupError && <Col span={24}><Alert type="error" banner message={state.signupError} /></Col>}
                    <Form.Item
                        wrapperCol={{
                            span: 24,
                        }}
                    >
                        <Space>
                            <Button
                                onClick={() => signUp()}
                                type="primary"
                                htmlType="submit"
                                size="large"
                            >
                                Login
                            </Button>
                            <Button
                                type="dashed"
                                htmlType="reset"
                                size="large"
                            >
                                Reset
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Col>


            <Col span={12}>
                <Button
                    color="red"
                    type="primary"
                    size="large"
                    block
                    onClick={() =>
                        Auth.federatedSignIn({
                            provider: CognitoHostedUIIdentityProvider.Google,
                        })
                    }
                >
                    <SimpleLineIcon name="social-google" /> Google{" "}
                </Button>
            </Col>
            <Col span={12}>
                <Button type="primary" size="large" block>
                    <SimpleLineIcon name="social-twitter" /> twitter{" "}
                </Button>
            </Col>
            <Col span={12}>
                <Button color="red" type="primary" size="large" block>
                    <SimpleLineIcon name="social-instagram" /> instagram{" "}
                </Button>
            </Col>
            <Col span={12}>
                <Button type="primary" size="large" block>
                    <SimpleLineIcon name="social-linkedin" /> linkedin{" "}
                </Button>
            </Col>
        </Row>
    </section>
    )
}

const LoginSection=(props)=>{
    const {state, setState}=props
    const Login = () => {
        Auth.signIn(state.loginForm.email, state.loginForm.password)
            .then((res) => {
                setState({ ...state, loginData: res });
                console.log({ res });
            })
            .catch((ex) => {
                setState({ ...state, loginData: {}, loginError: ex.message });
                console.error({ ex });
            });
    };
    return(
        <section>
        <h1>Sigin in</h1>
        <h2>Welcome Back <span style={{ backgroundColor: '#fc6' }}>Dont have an account</span>  <a onClick={() => setState({ ...state, page: 1 })}>Signup</a>  </h2>
        <p>
            Here's my recent exploration. What do you think? Give your
            opinion in the comments below!
        </p>
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
                            },
                        ]}
                    >
                        <Input
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    loginForm: {
                                        ...state.loginForm,
                                        email: e.target.value,
                                    },
                                })
                            }
                        />
                    </Form.Item>

                    <Form.Item
                       
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password  onChange={(e) =>
                            setState({
                                ...state,
                                loginForm: {
                                    ...state.loginForm,
                                    password: e.target.value,
                                },
                            })
                        } />
                    </Form.Item>

                    {props.loginError && <Col span={24}><Alert type="error" banner message={props.loginError} /></Col>}
                    <Form.Item
                        wrapperCol={{
                            span: 24,
                        }}
                    >
                        <Space>
                            <Button
                                onClick={() => Login()}
                                type="primary"
                                htmlType="submit"
                                size="large"
                            >
                                Login
                            </Button>
                            <Button
                                type="dashed"
                                htmlType="reset"
                                size="large"
                            >
                                Reset
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Col>


            <Col span={12}>
                <Button
                    color="red"
                    type="primary"
                    size="large"
                    block
                    onClick={() =>
                        Auth.federatedSignIn({
                            provider: CognitoHostedUIIdentityProvider.Google,
                        })
                    }
                >
                    <SimpleLineIcon name="social-google" /> Google{" "}
                </Button>
            </Col>
            <Col span={12}>
                <Button type="primary" size="large" block>
                    <SimpleLineIcon name="social-twitter" /> twitter{" "}
                </Button>
            </Col>
            <Col span={12}>
                <Button color="red" type="primary" size="large" block>
                    <SimpleLineIcon name="social-instagram" /> instagram{" "}
                </Button>
            </Col>
            <Col span={12}>
                <Button type="primary" size="large" block>
                    <SimpleLineIcon name="social-linkedin" /> linkedin{" "}
                </Button>
            </Col>
        </Row>
    </section>
    )
}
import React, { useState } from 'react'
import 'antd/lib/style/themes/default.less';
import 'antd/dist/antd.less';
import './assets/style/theme.less'
import { PageHeader, Layout, Menu, Avatar, Divider, Row, Col, Card } from 'antd';
import logo from './assets/images/logo-small-2.png'
const { Header, Content, Footer, Sider } = Layout;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faHome, faBars, faShop, faAnchor, faProjectDiagram, faDashboard, faInfoCircle, faArrowAltCircleLeft, faCog } from '@fortawesome/free-solid-svg-icons'


const NewDashboard = () => {
    const [state, setState] = useState({ collapsed: false })
    return (
        <Layout className='newdashboard'>
            <Header color='#fc6'>
                <Row align='top' justify='space-around'>
                    <Col flex="1 0 1%">
                        <div className="logo" >
                            {/* <img src={logo} height={45} /> */}
                            <span style={{ color: '#6672ff' }}><FontAwesomeIcon icon={faShop} /> Merchant</span><span style={{ color: '#d966ff' }}>App</span>
                        </div>
                    </Col>
                    <Col flex="5 0 65%">
                        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['dashboard']}>
                            <Menu.Item key="home" icon={<FontAwesomeIcon icon={faHome} />}>Home</Menu.Item>
                            <Menu.Item key="dashboard" icon={<FontAwesomeIcon icon={faDashboard} />}> Dashboard</Menu.Item>
                            <Menu.Item key="about" icon={<FontAwesomeIcon icon={faAnchor} />}> About us</Menu.Item>
                            <Menu.Item key="Pricing" icon={<FontAwesomeIcon icon={faProjectDiagram} />}> Pricing</Menu.Item>
                            <Menu.Item key="Contact" icon={<FontAwesomeIcon icon={faAddressBook} />}> Contact us</Menu.Item>
                        </Menu>
                    </Col>
                    <Col flex="1 1 15%">
                        <Menu theme="light" mode="horizontal">
                            <Menu.Item key="about" icon={<Avatar size={40} src="https://joeschmoe.io/api/v1/random" />}>Khizar Ahmed</Menu.Item>
                            <Menu.Item key="notification" icon={<FontAwesomeIcon icon={faCog} />}/>
                        </Menu>

                    </Col>
                </Row>
            </Header>
            <Layout>
                <Sider theme='light' width={250} collapsedWidth={80} collapsed={state.collapsed} breakpoint="lg" reverseArrow >
                    <p onClick={() => setState({ ...state, collapsed: !state.collapsed })} className='nav'><FontAwesomeIcon icon={faBars} /> {!state.collapsed && <span>Navigations</span>}</p>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['home']}>
                        <Menu.Item icon={<FontAwesomeIcon icon={faHome} />}>item 1</Menu.Item>
                        <Menu.Item icon={<FontAwesomeIcon icon={faAddressBook} />}> item 2</Menu.Item>
                    </Menu>
                    <Divider />
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['about']}>
                        <Menu.Item icon={<FontAwesomeIcon icon={faHome} />}>item 1</Menu.Item>
                        <Menu.Item icon={<FontAwesomeIcon icon={faAddressBook} />}> item 2</Menu.Item>
                        <Menu.Item key="dashboard" icon={<FontAwesomeIcon icon={faDashboard} />}> Dashboard</Menu.Item>
                        <Menu.Item key="about" icon={<FontAwesomeIcon icon={faAnchor} />}> About us</Menu.Item>
                        <Menu.Item key="Pricing" icon={<FontAwesomeIcon icon={faProjectDiagram} />}> Pricing</Menu.Item>
                        <Menu.Item key="Contact" icon={<FontAwesomeIcon icon={faAddressBook} />}> Contact us</Menu.Item>
                    </Menu>

                </Sider>
                <Content className='main-content'>
                    <section className='notification'><FontAwesomeIcon icon={faInfoCircle} /> Hi Guest, this is the notification area</section>
                    <section className='content'>
                        <PageHeader title="Welcome Khizar" backIcon={<FontAwesomeIcon icon={faArrowAltCircleLeft}/>} ghost={false} className='boxshadow' />

                        <Row align='stretch' justify='start' gutter={[16, 16]} style={{ marginTop: 20 }}>
                            <Col span={6}>
                                <Card title="Transactions" extra={<FontAwesomeIcon icon={faCog} />} className='boxshadow'>
                                    <Row>
                                        <Col span={8}>
                                            <h2>25</h2>
                                            <p>Completed</p>
                                        </Col>
                                        <Col span={8}>
                                            <h2>15</h2>
                                            <p>Pending</p>
                                        </Col>
                                        <Col span={8}>
                                            <h2>3</h2>
                                            <p>Cancelled</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Disputes" className='boxshadow' extra={<FontAwesomeIcon icon={faCog} />}>
                                    <Row>
                                        <Col span={8}>
                                            <h2>25</h2>
                                            <p>Completed</p>
                                        </Col>
                                        <Col span={8}>
                                            <h2>15</h2>
                                            <p>Pending</p>
                                        </Col>
                                        <Col span={8}>
                                            <h2>3</h2>
                                            <p>Cancelled</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                        </Row>
                    </section>
                </Content>
            </Layout>

        </Layout>
    )
}

export default NewDashboard
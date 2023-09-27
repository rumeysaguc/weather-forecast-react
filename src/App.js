import './App.css';
import { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import Daily from './components/Daily';
import Search from './components/Search';

const { Header, Content, Footer } = Layout;

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const items1: MenuProps['items'] = ['Search by CityName', 'Search by createdDate'].map((key) => ({
  key,
  label: `${key}`,
}));
const obj = {siteName:"Weather Forecast" , createdDate:"26.09.2023"}; 


function App(){
  return(
    <>
 <Layout className='layout'>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <h2 style={{ color:"white",fontFamily:"sans-serif" }}>{obj.siteName}</h2>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Content style={{ padding: '0 90px' }}>
        <Daily></Daily>
        <Search></Search>
      </Content>
      <Footer style={{ textAlign: 'center' }}>{obj.siteName} Site {obj.createdDate}</Footer>
    </Layout>

    </>
  );
}

export default App;
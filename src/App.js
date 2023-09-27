import './App.css';
import { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Daily from './components/Daily';
import Search from './components/Search';
import { Button, DatePicker, Space, version } from 'antd';

const { Header, Content, Footer } = Layout;

const items1: MenuProps['items'] = ['Search by CityName', 'Search by Date'].map((key) => ({
  key,
  label: `${key}`,
}));

const obj = {siteName:"Weather Forecast" }; 
const date = "27.09.2023"
function App(){
  return(
    
 <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <h2 style={{ color:"white",fontFamily:"sans-serif" }}>{obj.siteName}</h2>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Content style={{ padding: '0 90px' }}>
        <Daily></Daily>
        <Search></Search>
      </Content>
    </Layout>

    
  );
}

export default App;
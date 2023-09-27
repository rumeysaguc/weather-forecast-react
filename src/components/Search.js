import { Button, DatePicker, Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
function Search(){
    return (
        <div>
             <Row>
      <Col span={12}> <DatePicker />
</Col>
      <Col span={12}><Button icon={<SearchOutlined />}>Search</Button>
</Col>
    </Row>


        </div>
       
    )
}
export default Search;
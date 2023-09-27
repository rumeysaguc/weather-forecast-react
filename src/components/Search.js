import { Button, DatePicker, Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
function Search(){
    return (
        <div>
             <Row>
                
     <DatePicker />
<Button danger type="primary" icon={<SearchOutlined />}>Search</Button>

    </Row>


        </div>
       
    )
}
export default Search;
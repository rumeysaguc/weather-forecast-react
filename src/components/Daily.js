import { Statistic, Col, Card, Row } from 'antd';
import { StockOutlined } from '@ant-design/icons';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}
function getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, {weekday: 'long'});
  }


function Daily() {
  return (
    <div>
      <Card
        title={`Daily - ${getDate()} ${getDayName()}`}
        extra={<a href="#">More</a>}
        style={{ width: 500 }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Feedback" value={1128} prefix={<StockOutlined />} />
          </Col>
          <Col span={12}>
            <Statistic title="Unmerged" value={93} suffix="/ 100" />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Daily;

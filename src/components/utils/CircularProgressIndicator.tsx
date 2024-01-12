import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function CircularProgressIndicator() {
  return (
    <div className='progress-indicator-container'>
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: 35, color: '#db005b' }} spin />
        }
      />
    </div>
  );
}

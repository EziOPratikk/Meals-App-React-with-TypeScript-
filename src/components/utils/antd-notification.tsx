import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const antdNotification = (type: NotificationType, message: string) => {
  notification[type]({
    message,
  });
};

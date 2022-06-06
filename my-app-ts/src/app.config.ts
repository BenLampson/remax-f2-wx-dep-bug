const pages = ['pages/index/index'];
const color = '#282c34';
 
import { AppConfig as WechatAppConfig } from 'remax/wechat';

export const wechat: WechatAppConfig = {
  pages,
  window: {
    navigationBarBackgroundColor: color,
    navigationBarTitleText: 'Remax One Wechat',
  }
};
 
import {request} from './request'
export function getDetail(iid) {
    return request({
        url: 'detail',
        params: {
            iid
        }
    })
}
export function getRecommend() {
    return request({
        url: 'recommend',
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.newPrice;
        this.oldPrice = itemInfo.oldPrice;
        this.realPrice = itemInfo.lowNowPrice;
        this.discount = itemInfo.discountDesc;
        this.columns=columns;
        this.services=services;

    }
}
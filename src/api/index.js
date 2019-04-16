/*
包含n个接口请求函数的模块
函数返回值：promise对象
 */
//根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
//根据食品分类列表
export const reqFoodTypes = () => ajax(`/index_category`)
//根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax(`/shops`,{longitude,latitude})
//根据食品分类列表
export const reqAddress = (geohash) => ajax()

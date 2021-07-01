
export const GetDayMonth = (d: string) => {
    var sd=d.substring(0,8);
    if(sd[3]==='0'||sd[3]==='1'){
        sd = d.substring(0,5);}
    return sd;
   };

export const Rand = ()=>{
    const firstPart = (Math.random() * 46656) | 0;
    const secondPart = (Math.random() * 46656) | 0;
    const firstPartStr = ('000' + firstPart.toString(36)).slice(-3);
    const secondPartStr = ('000' + secondPart.toString(36)).slice(-3);
    return firstPartStr + secondPartStr;
}
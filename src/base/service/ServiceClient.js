export default class ServiceClient{
  static _instance = null;
  constructor(){

  }
  static getInstance(){
    if(ServiceClient._instance === null){
      ServiceClient._instance = new ServiceClient();
    }
    return ServiceClient._instance;
  }

  getUserPlayLists(uid){
    return new Promise((resolve,reject) => {
      $.ajax({
        url: "/api/user/playlist",
        type: "GET",
        data: {
          uid,
          limit: 1000,
          offset: 0
        }
      }).always(res => {
        console.log(res);
        if(res.code === 200){
          resolve(res.playlist);
        }else{
          reject("error");
        }
      });
    });
  }
  async getAsyncUserPlayLists(uid)
    {
        let res = null;
        try {
            res = await $.ajax({
                url: "/api/user/playlist",
                type: "GET",
                data: {
                    uid,
                    limit: 1000,
                    offset: 0
                }
            });
        } catch (e) {
            throw(e);
        }

        if (res.code === 200)
        {
            return res.playlist;
        }
        else
        {
            return res;
        }

    }
}

import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PostService extends BaseService {
    getAllPosts(): async.IAjaxThenable<any> {
        return this.http.json<any>({
            method: 'GET',
            url:  this.host,
        }).then((success) => {
            console.log(success.response);
            return success.response.data.children;
        }, (err) =>{
            console.error(err);
            throw err;
        });
    }
    getSinglePost(id: string): async.IAjaxThenable<models.IPost> {
        return this.http.json<any>({
            method: 'GET',
            url: this.host + '/' + id,
        }).then((success) => {
            return success.response.data.children;
        }, (err) => {
            console.error(err);
            throw err;
        });
    }
}

register.injectable('post-svc', PostService);

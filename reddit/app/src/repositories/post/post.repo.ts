import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import PostService from '../../services/post/post.svc';

export default class PostRepository extends BaseRepository {

    constructor(private postSvc: PostService){
        super();
    }
    
    getAllPosts(): async.IThenable<models.IPost[]> {
        return this.postSvc.getAllPosts().then((success) => {
            let posts = <models.IPost[]>[];
            for (let i = 0; i < success.length; i++) {
                let post = {
                    id: success[i].data.id,
                    author: success[i].data.author,
                    title: success[i].data.title,
                    url: success[i].data.url,
                    createdAt: success[i].data.created_utc
                }
                posts.push(post);
            }
        return posts;
        })
     
    }
    
    getSinglePost(id: string): async.IThenable<models.IPost> {
        // return this.postSvc.getSinglePost(id); 
        return this.getAllPosts().then((success) => {
            for(let i = 0; i < success.length; i++){
                let SinglePost = success[i];
                if(SinglePost.id === id){
                    return SinglePost;
                }
            }
            return null;
        });
    }
}

register.injectable('post-repo', PostRepository, [PostService]);

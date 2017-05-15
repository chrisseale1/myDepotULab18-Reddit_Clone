import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import PostRepository from '../../repositories/post/post.repo';
import SinglePostViewControl from '../../viewcontrols/singlepost/singlepost.vc';

export default class ListviewViewControl extends BaseViewControl {
    templateString: string = require('./listview.vc.html');

    context = {
        posts: <models.IPost[]>[],
        singleVC: SinglePostViewControl,
    };

    constructor(private postRepo: PostRepository){
        super();
    }

    navigatedTo(){
        this.postRepo.getAllPosts().then((success) =>{
            this.context.posts = success;
        })
    }

    getSinglePost(index: number){
        // this.navigator.navigate(SinglePostViewControl)
        this.navigator.navigate(SinglePostViewControl, {
            parameters: {
                id: index
            }
        })
    }
}

register.viewControl('listview-vc', ListviewViewControl,[PostRepository]);

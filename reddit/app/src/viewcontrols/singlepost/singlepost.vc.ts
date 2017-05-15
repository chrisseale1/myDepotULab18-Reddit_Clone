import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/post/post.repo';
import ListViewControl from '../../viewcontrols/listview/listview.vc';

export default class SinglepostViewControl extends BaseViewControl {
    templateString: string = require('./singlepost.vc.html');

    context: any = {
        post: <models.IPost>{}
    };

    constructor(private postRepo: PostRepository){
        super();
    }
    
    navigatedTo(params: {id:string;}): void {
        let id = params.id;
        this.postRepo.getSinglePost(id).then((success) => {
            this.context.post = success;
        }, (err) => {
            console.log(err);
        });
    }

    goToListView(): void {
        this.navigator.navigate(ListViewControl);
    }
}

register.viewControl('singlepost-vc', SinglepostViewControl, [PostRepository]);

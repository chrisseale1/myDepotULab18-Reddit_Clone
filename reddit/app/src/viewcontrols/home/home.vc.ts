import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ListViewControl from '../../viewcontrols/listview/listview.vc';
import PostRepository from '../../repositories/post/post.repo';
import SinglePostViewControl from '../../viewcontrols/singlepost/singlepost.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: {};
    
    constructor(private postRepo: PostRepository) {
        super();
    }

    goToListView(){
        this.navigator.navigate(ListViewControl);
    }


}
register.viewControl('home-vc', HomeViewControl, [PostRepository]);

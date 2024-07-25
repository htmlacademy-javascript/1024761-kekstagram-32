import './utils.js';
import './pictures.js';
import './modal-picture.js';

import {createArrayPhoto} from './data.js';
import { randerGallery } from './modal-picture.js';
import { showBigPicture } from './modal-picture.js';
import { renderPosts } from './pictures.js';
renderPosts();
randerGallery(createArrayPhoto());
showBigPicture();

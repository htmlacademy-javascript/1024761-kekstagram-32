import './utils.js';
import './pictures.js';
import './modal-picture.js';

import {createArrayPhoto} from './data.js';
import { randerGalery } from './modal-picture.js';
randerGalery();
import { renderPosts } from './pictures.js';
renderPosts (createArrayPhoto());
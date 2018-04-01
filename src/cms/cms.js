/**
 * Created by vaibhav on 31/3/18
 */
import CMS from 'netlify-cms'

import HomePagePreview from "./preview-templates/HomePagePreview";
import AboutPagePreview from './preview-templates/AboutPagePreview';
import ArticlePreview from './preview-templates/ArticlePreview';
import PricingPagePreview from './preview-templates/PricingPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('pricing', PricingPagePreview);
CMS.registerPreviewTemplate('blog', ArticlePreview);

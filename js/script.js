'use strict';

const titleClickHandler = function(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log(event);

  /* [DONE] remove class 'active' from all article links */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);
  console.log('clickedElement (with plus): ' + clickedElement);
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts .active');

  for(let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const clickedLink = clickedElement.getAttribute('href');
  console.log('clicked link href: ', clickedLink);
    

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const clickedArticle = document.querySelector(clickedLink);
  console.log('clicked link article: ', clickedArticle);

  /* [DONE] add class 'active' to the correct article */

  clickedArticle.classList.add('active');
};
  
const links = document.querySelectorAll('.titles a');
console.log(links);

for(let link of links) {
  link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optTagsListSelector = '.tags.list',
  optArticleAuthorSelector = '.post-author',
  optCloudClassCount = 5,
  optCloudClassPrefix = 'tag-size-';

function generateTitleLinks(customSelector = '') {

  /* [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* [DONE] for each article */
  /* [DONE] get the article id */
  /* [DONE] find the title element */
  /* [DONE] get the title from the title element */
  /* [DONE] create HTML of the link */
  /* [DONE] insert link into titleList */

  let html = '';
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log(optArticleSelector + customSelector);

  for(const article of articles) {
    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    // titleList.innerHTML = titleList.innerHTML + linkHTML;
    // titleList.insertAdjacentHTML('beforeend', linkHTML);
    html = html + linkHTML;
    console.log(article, articleId, articleTitle, linkHTML);
    // console.log(titleList.innerHTML);
    console.log(html);     
       
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  console.log(links);
  
  for(let link of links) {
    link.addEventListener('click', titleClickHandler);
  } 
}

generateTitleLinks();

function calculateTagsParams()  {
  const params = {max: 0, min: 999999};
  for(let tag in allTags) {
    if(allTags[tag] > params.max) {
      params.max = allTags[tag];
    }
    if(allTags[tag] < params.min) {
      params.min = allTags[tag];
    }
    params.max = Math.max(allTags[tag], params.max);
    params.min = Math.min(allTags[tag], params.min);
    console.log(tag + ' is used ' + allTags[tag] + ' times');
  }
  return params;
}  

function calculateTagClass(count, params) {
  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1);
  return classNumber;
}


let allTags = {};
function generateTags(){  
  /* find all articles */
  /* DONE */
  /* START LOOP: for every article: */
  /* find tags wrapper */
  /* make html variable with empty string */
  /* get tags from data-tags attribute */
  /* split tags into array */
  /* split tags into array */
  /* START LOOP: for each tag */
  /* generate HTML of the link */
  /* add generated code to html variable */
  /* END LOOP: for each tag */
  /* insert HTML of all the links into the tags wrapper */
  /* END LOOP: for every article: */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);  

  for(let article of articles) {
    let html = '';
    const articleWraper = article.querySelector(optArticleTagsSelector);
    const articleTag = article.getAttribute('data-tags');
    const articleTagsArray = articleTag.split(' ');
    for(let tag of articleTagsArray) {
      const linkHTML = '<li><a href="#tag-' + tag +'">' + tag + '</a></li> ';
      // articleWraper.insertAdjacentHTML('beforeend', linkHTML);
      html = html + linkHTML;
      if(!allTags.hasOwnProperty(tag)) {
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }      
    }
    articleWraper.innerHTML = html;
  }
  console.log(allTags);
  const tagList = document.querySelector('.tags');

  

  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams);
  let allTagsHTML = '';  
  for(let tag in allTags) {
    const tagLinkHTML = calculateTagClass(allTags[tag], tagsParams);
    console.log('tagLinkHTML:', tagLinkHTML);
    allTagsHTML += '<li><a class="' + optCloudClassPrefix + tagLinkHTML + '" href="#tag-' + tag + '">' + tag + '</a> (' + allTags[tag] + ') </li>';
  }
  tagList.innerHTML = allTagsHTML;
  
}
generateTags();

function tagClickHandler(event) {
  /* DONE */
  /* prevent default action for this event */
  /* make new constant named "clickedElement" and give it the value of "this" */
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  /* make a new constant "tag" and extract tag from the "href" constant */
  /* find all tag links with class active */
  /* START LOOP: for each active tag link */
  /* remove class active */
  /* END LOOP: for each active tag link */
  /* find all tag links with "href" attribute equal to the "href" constant */
  /* START LOOP: for each found tag link */
  /* add class active */
  /* END LOOP: for each found tag link */
  /* execute function "generateTitleLinks" with article selector as argument */

  event.preventDefault();
  const clickedElement = this;
  const href = clickedElement.getAttribute('href');
  const tag = href.replace('#tag-', '');
  
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

  for(const activeTag of activeTags) {
    activeTag.classList.remove('active');
  }

  const sameTags = document.querySelectorAll('a[href="' + href + '"]');

  for(const sameTag of sameTags) {
    sameTag.classList.add('active');
  }
  console.log(tag, sameTags, activeTags);

  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */
  /* START LOOP: for each link */
  /* add tagClickHandler as event listener for that link */
  /* END LOOP: for each link */

  const tags = document.querySelectorAll('.post-tags .list a[href^="#tag-"]');
  for(const tag of tags) {
    tag.addEventListener('click', tagClickHandler);
  }
}  

addClickListenersToTags();

function generateAuthors() {
  
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);  

  for(let article of articles) {
    let html = '';
    const authorWraper = article.querySelector(optArticleAuthorSelector);
    const articleTag = article.getAttribute('data-author');
    const linkHTML = 'by <a href="#author-' + articleTag + '">' + articleTag + '</a>';
    console.log(linkHTML);
    html = html + linkHTML;          
    authorWraper.innerHTML = html;
  }
}
generateAuthors();

function authorClickHandler(event) {
  
  event.preventDefault();
  const clickedElement = this;
  const author = clickedElement.getAttribute('href');
  const tag = author.replace('#author-', '');

  console.log(author);
  
  generateTitleLinks('[data-author="' + tag + '"]');
}

function addClickListenersToAuthor() {
  /* find all links to tags */
  /* START LOOP: for each link */
  /* add tagClickHandler as event listener for that link */
  /* END LOOP: for each link */

  const tags = document.querySelectorAll('.post-author a[href^="#author-"]');
  for(const tag of tags) {
    tag.addEventListener('click', authorClickHandler);
  }
}  
addClickListenersToAuthor();
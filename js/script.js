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
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks() {

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
  const articles = document.querySelectorAll(optArticleSelector);

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

function generateTags(){

  console.log(optArticleTagsSelector);
  
  /* find all articles */

  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);  

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

  for(let article of articles) {
    let html = '';
    const articleWraper = article.querySelector(optArticleTagsSelector);
    const articleTag = article.getAttribute('data-tags');
    const articleTagsArray = articleTag.split(' ');
    for(let tag of articleTagsArray) {
      const linkHTML = '<li><a href="#tag-' + tag +'">' + tag + '</a></li> ';
      // articleWraper.insertAdjacentHTML('beforeend', linkHTML);
      html = html + linkHTML;      
    }
    articleWraper.innerHTML = html;
  }
}

generateTags();
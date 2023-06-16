# First Website

We're gonna go live on GitHub with your very own website!

**Table of Contents**

- [First Website](#first-website)
  - [Prerequisites](#prerequisites)
  - [Overview](#overview)
    - [Specs](#specs)
    - [Take Away](#take-away)
    - [Type of App](#type-of-app)
    - [The Big 3](#the-big-3)
    - [HTML in 3 Minutes](#html-in-3-minutes)
  - [Lesson Steps](#lesson-steps)
    - [Work Flow](#work-flow)
    - [TODO 1 : Create index.html](#todo-1--create-indexhtml)
    - [TODO 2 : Add a Title](#todo-2--add-a-title)
    - [TODO 3 : Create Sections for the Menu and Main Content](#todo-3--create-sections-for-the-menu-and-main-content)
    - [TODO 4 : Create Structure for our Content](#todo-4--create-structure-for-our-content)
    - [TODO 5 : Add Content](#todo-5--add-content)
    - [TODO 6 : Add More Content - Interests](#todo-6--add-more-content---interests)
    - [TODO 7 : Add an Image](#todo-7--add-an-image)
    - [TODO 8 : Navigation and Site Title](#todo-8--navigation-and-site-title)
    - [TODO 9 : Make it Pretty](#todo-9--make-it-pretty)
      - [CSS Selectors in a Nutshell](#css-selectors-in-a-nutshell)
      - [Selecting HTML Elements by ID, Class, or by Tag Type](#selecting-html-elements-by-id-class-or-by-tag-type)
    - [TODO 10 : Add in Attributes](#todo-10--add-in-attributes)
    - [TODO 11 : Customize CSS](#todo-11--customize-css)
    - [Extra Challenge](#extra-challenge)
    - [TODO 12 : Go Live](#todo-12--go-live)

## Prerequisites

- [Students will require a GitHub account](https://github.com/join) and will need to remember their GitHub username and password.

  GitHub is a place on the Internet where we can store code! It's a cool social coding platform, kind of like Facebook for coders.

- [Students will require a Gitpod account](https://gitpod.io) (or some other IDE)

  Gitpod is a place on the Internet where we can _work_ on code and create virtual workspaces for our coding projects. It is designed to work very closely with GitHub for easy usage.

<!-- * [Students will need to set up a Github repository and Gitpod workspace].  -->
<!-- Click here to find instructions to complete these steps](https://github.com/OperationSpark/fsd-setup) -->

## Overview

### Specs

- At the end of the lesson students will have built and designed their own website that is viewable on the web.
- The website will be hosted on GitHub under student's own account, and is something they can build upon on over time.
- The live website is hosted using a service called GitHub Pages: <a href="https://pages.github.com/" target="_blank">If you want to learn more about GitHub Pages, have a look here...</a>
- The website will be the student's own and will feature a short profile of the student.

### Take Away

- Basic HTML5, including HTML (content) and CSS (style).
- Basic web page navigation
- Using git and GitHub

### Type of App

We are building a website, to be viewed live on the web at your GitHub page, and it will be viewed in a web browser, like Chrome.

## The Big 3

There's really three parts at play in a webpage:

- HTML: Hypertext Markup Language - A set of tags to mark or section-off the structure and content of a webpage.
- CSS: Cascading Style Sheets - A syntax for specifying a set of rules that _style_ web pages. CSS is responsible for how a webpage looks!
- JavaScript: A programming language that allows web pages to respond to user input, to dynamically change the content or appearance of a webpage, or make request to load data into a webpage. Essentially, JavaScript is responsible for the _behaviour_ of a webpage.

### HTML in 3 Minutes

Very simply put, HTML is a set of text-tags that tell a web browser how to structure and identify the content of a web page. Developers _markup_ or _section off_ the structure and content of a webpage using HTML tags to _section off_ the parts of the page. Take a look at any webpage, and you'll see things like a header with some type of navigation, maybe a sidebar with more navigation options, and then headings, paragraph text, images and buttons. All of these _page elements_ are marked as such using HTML tags.

Before we start marking-up our webpage, here's a few things to note about HTML Tags:

Try to remember that most HTML tags have both an opening and closing tag. So, when you create a `<div>` tag, which stands for _document division_ (a way of sectioning off page content), you must also create its closing tag, like so:

```HTML
<div>
    <!-- All other tags and content in here belong to the <div></div> tag -->
</div>
```

Some HTML tags, like the `<img>` tag, do not require a closing tag, because they are not designed to hold content between the opening and closing tag. The image tag specifies the source of the image it should display using what's called a tag _attribute_, which is a property of the tag, not content of the tag. Check it out:

```HTML
<img src="path/to/my-image.jpg">
```

Notice, above, that the `src` attribute is located _inside_ the `<img>` tag.

Also note that HTML tags are hierarchical, and **need to be indented to illustrate their hierarchical relationship!** Tags can contain content, like text or images, but can also contain or _nest_ other tags. Have a look:

```HTML
<div id="content">
    <div id="sidebar">
        <!-- sidebar content goes here -->
    </div>
    <div id="main">
        <!-- main content goes here -->
    </div>
</div>
```

Above, you'll see this pattern often - notice that we have one `<div>` tag with an id attribute of `content`, and inside this tag, we have two other `<div>` tags, one for a sidebar and one for a main section of the page. The _content_ `<div>` is the parent of both the _sidebar_ and _main_ `<div>`, while _sidebar_ and _main_ are siblings. Notice the indentation - this is extremely important as it clearly and visually spells out these hierarchical relationship. Indentation and relationships of tags (and code blocks) are the things newcomers struggle with the most! Be vigilant here!

<br>
<br>
<br>
<br>
<br>

# Lesson Steps

> ### **Work Flow**
>
> _How to navigate thorough the lesson steps_
>
> > You'll be creating a whole web page from scratch, from creating the `index.html` file (_which you will do in Todo#1_), to writing all the `<html>` tags for your content, and adding style with CSS.
>
> > To complete the assignment, below you'll find numbered **TODO** lesson steps. While reading this lesson, whenever you come across a **TODO** step with a number/letter combo **(ex, 1a)**, you are expected to do this step, which may require you to create a file, or insert some HTML, CSS or JavaScript in the appropriate place. Make sure you have accomplished the tasks specified with each **ToDo** before moving on.
>
> Part of being a good developer is being able to follow instructions closely. Sometimes we may be showing you code examples to make a point, versus adding code (any additional details for reference, you will see displayed with a sideways triangle). Make sure you are adding/removing code _only_ if a specific step asks you to.

## **TODO 1 :** _Create index.html_

- **1a.** **FIND:** Locate the file tree on the left side of your workspace
- **1b.** **FIND:** Right click inside of your file tree (not on top of any files/folders that are currently there) and select “New File” (See below)

    <img src="img/gitpod-create-new-file.png" style="max-height: 450px">

- **1c.** **CODE:** Make sure to name the file `index.html` (See below)

    <img src="img/gitpod-name-new-file.png" style="max-height: 350px">

- **1d.** **CODE:** Add the following boilerplate code in your file to get started:

  ```HTML
  <!DOCTYPE HTML>
  <html>
      <head>

      </head>

      <body>

      </body>
  </html>
  ```

  > <details>
  > <summary> 
  > Let's talk about the tags for a second:
  > </summary>
  >
  > If you're not familiar with the basic tags needed for the structure of >an HTML page, you'll want to memorize them. At least for now, every >HTML page contains the DOCTYPE, html, head and body tags.
  >
  > The `<!DOCTYPE HTML>` tag tells the browser you want to render the document using the most recent version of HTML. The opening and closing tags of `<html></html>` wrap our html page, but are in fact somewhat redundant.
  >
  > The next two tag sets make up the two sections of any well formed HTML page:
  >
  > The `<head></head>` tag represents metadata for a webpage, that is, information about the web page used by the browser, providing extra information about the webpage, but is not content. This is similar to the information on the outside of a postal envelope - the to and from address, the stamp, the processing stamp from the post office - information important to the delivery of the letter, but _nothing_ to do with the _content_ of the letter.
  >
  > Finally, every page has a `<body></body>` tag, and it is between the body tag that all visible content will be placed. That's right, all content you want to show to the user will be children of the `<body>`, so pay careful attention to ensure that when you're adding navigation, paragraphs and images tags, you're doing so within the `<body>` tag.
  >
  > </details>

<br>

We've made the structure of the site so now we need some content! Let's move on to giving your site a title!

#

<br>
<br>
<br>
<br>
<br>

#

## **TODO 2 :** _Add a Title_

- **2a.** **CODE:** Add your title `<title></title>` tag to where it belongs, between your `<head>` tags.

 <details> 
     <summary> Click to see what your code should look like after this step</summary>

  ```HTML
  <!DOCTYPE HTML>
  <html>
      <head>
        <title>Sheba's Amazing Website</title>
      </head>

      <body>

      </body>
  </html>
  ```
  </details>
  
#

<br>
<br>
<br>
<br>
<br>

#

## **TODO 3 :** _Create Sections for the Menu and Main Content_

We're going to create `<div>` tags to group our content together. What is the div tag you may ask?

> <details> 
> <summary>  Click here to learn more about divs </summary>
>
> The `<div>` tag stand for _document division_, and they are special tags that help us divide or group together content on our web page. You can consider them sort of like containers, into which we group content, and those containers can be invisible or _styled_ with visible properties, like a background color, a border, etc.
>
> </details>
> <br>

**Before you code:** All of the tags used to mark our HTML content will reside _between_ the opening and closing of the `<body>` tag. So for rest of the HTML tags you create, _make sure_ you place them _between_ `<body>` and `</body>` like so:

> ```HTML
> <body>
>    <!-- Visible HTML elements GO HERE  -->
> </body>
> ```

<br>

- **3a.** **CODE:** Ok, onward with our code! Add a set of div tags within your body element.

  <details>
    <summary> What does this do? Click to expand</summary>
    <summary>
      So, to start grouping together our content in a meaningful way, inside the `<body>` tag, we created a new document division using the `<div>` tag. This is going to contain all the site content. You can see that we also put a comment above that div.
      
      DON'T FORGET to include the comment!** It might not have any effect on your code, but it will help you out by keeping sections of your code labeled for future reference and confirmation that you are adding content within the correct area.
      
      A comment is any bit of code that has no effect; it's only purpose is to make it easier for you and others to understand what is happening. In HTML, comments always take the form of `<!-- some message -->`.
    </summary>
  </details>

  <br>

- **3b.** **CODE:** Now, let's add our site navigation menu and the main content of our site. Inside the new div you created, add a set of opening and closing tags for `<nav>` and `<main>`.

  > **Hint: `<nav>` and `<main>`will both be nested sibling elements here!**

    <details> 
    <summary> Click to see what your code should look like after completing these steps </summary> 
    
    ```HTML
    <body>
        <!-- All content goes here -->
        <div> 
            <nav>
    
            </nav>
    
            <main>
    
            </main>
        </div>
    </body>
    ```
    </details>

#

<br>
<br>
<br>
<br>
<br>

#

## **TODO 4 :** _Create Structure for our Content_

- **4a.** **CODE:** Inside the `<main>` element you've already created, create two new nested `<div>` elements.

      - These will act as the two columns of our page - the sidebar and the main content, as noted by the comments we leave next to each. Once again, don't forget to include the comments!

    <details> 
    <summary> Click to see what your code should look like after completing these steps </summary> 
    
    ```HTML
      <main>
          <!-- Sidebar section -->
          <div>

          </div>

          <!-- Content section -->
          <div>

          </div>
      </main>
    ```
    </details>

#

<br>
<br>
<br>
<br>
<br>

#

## **TODO 5 :** _Add Content_

Ok, so far, we've sectioned off our webpage, now we need to add some content...

- **5a.** **CODE:** Add the following tags inside of the Content `<div>` element:

  - Create a `<h2> </h2>` element and put your name inside of it.
  - Below that make a `<p> </p>` element and inside it put your position or job title (such as "Student at XYZ High.")


#

<br>
<br>
<br>
<br>
<br>

#

## **TODO 6 :** Add More Content - Interests

Inside of the Content `<div>` element, let's create a section where we can list your interests.

- **6a.** **CODE:** Below the closing `</p>` tag add the following:

  - The comment `<!-- Interests section -->`
  - Below the comment, create a `<div> </div>` element.
  - Inside the new `<div>` element, give the list a title with the `<h3>` tag and the text `Interests`.
  - Create an unordered list with the `<ul>` tag and three sets of `<li>` tags nested inside

   <details> 
   <summary> Click to see what your code should look like after completing these steps</summary>

    > In the end, your code should look like this (only with more specific interests, of course)!
    >
    > ```HTML
    >    <!-- Content Section-->
    >    <div>
    >        <h2></h2>
    >        <p></p>
    >        <!-- Interests section -->
    >        <div>
    >            <h3>Interests</h3>
    >            <ul>
    >                <li>Thing 1</li>
    >                <li>Thing 2</li>
    >                <li>Thing 3</li>
    >            </ul>
    >        </div>
    >    </div>
    > ```
</details>
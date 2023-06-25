<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Kennethsite</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body class="">
  <div style="display:none;"><?php
$url = $_SERVER['REQUEST_URI'];
if ($url === '/') {
?>
<h3 _ngcontent-yuh-c3="" class="book-stub draw-border noselect" style="padding:5px 10px;"><a _ngcontent-yuh-c3="" disabled="" href="/One-Variable-Advanced-Calculus/1"></a>One Variable Advanced Calculus</h3>
<h3 _ngcontent-yuh-c3="" class="book-stub draw-border noselect" style="padding:5px 10px;"><a _ngcontent-yuh-c3="" disabled="" href="/Real-and-Abstract-Analysis/1"></a>Real and Abstract Analysis</h3>
<h3 _ngcontent-yuh-c3="" class="book-stub draw-border noselect" style="padding:5px 10px;"><a _ngcontent-yuh-c3="" disabled="" href="/Calculus-of-One-and-Many-Variables/1"></a>Calculus of One and Many Variables</h3>
<h3 _ngcontent-yuh-c3="" class="book-stub draw-border noselect" style="padding:5px 10px;"><a _ngcontent-yuh-c3="" disabled="" href="/Calculus-of-Real-and-Complex-Variables/1"></a>Calculus of Real and Complex Variables</h3>
<h3 _ngcontent-yuh-c3="" class="book-stub draw-border noselect" style="padding:5px 10px;"><a _ngcontent-yuh-c3="" disabled="" href="/Elementary-Linear-Algebra/1"></a>Elementary Linear Algebra</h3>
<h3 _ngcontent-yuh-c3="" class="book-stub draw-border noselect" style="padding:5px 10px;"><a _ngcontent-yuh-c3="" disabled="" href="/Engineering-Math/1"></a>Engineering Math</h3>
<h3 _ngcontent-yuh-c3="" class="book-stub draw-border noselect" style="padding:5px 10px;"><a _ngcontent-yuh-c3="" disabled="" href="/Linear-Algebra-And-Analysis/1"></a>Linear Algebra And Analysis</h3>
<h3 _ngcontent-yuh-c3="" class="book-stub draw-border noselect" style="padding:5px 10px;"><a _ngcontent-yuh-c3="" disabled="" href="/Linear-Algebra,-Theory-And-Applications/1"></a>Linear Algebra, Theory And Applications</h3>
<h3 _ngcontent-yuh-c3="" class="book-stub draw-border noselect" style="padding:5px 10px;"><a _ngcontent-yuh-c3="" disabled="" href="/Topics-In-Analysis/1"></a>Topics In Analysis</h3>
<?php
} else if (strpos($url, 'book') !== false) {
    $urlArr = explode("/", $url);
    if (count($urlArr) > 3) {
        $book = $urlArr[2];
        $page = $urlArr[3]-1;
        if (file_exists("./assets/".$book.$page.".html")) {
          echo "<a href='/book/".$book."/".($page+1)."'>Next Page</a>";
          echo readfile("./assets/".$book.$page.".html");
        }
    }
}
?></div>
  
  <app-root></app-root>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LXH80FJZKS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LXH80FJZKS');
  const ga = gtag;
</script>
<script src="runtime-es2015.js" type="module"></script><script src="runtime-es5.js" nomodule defer></script><script src="polyfills-es5.js" nomodule defer></script><script src="polyfills-es2015.js" type="module"></script><script src="styles-es2015.js" type="module"></script><script src="styles-es5.js" nomodule defer></script><script src="vendor-es2015.js" type="module"></script><script src="vendor-es5.js" nomodule defer></script><script src="main-es2015.js" type="module"></script><script src="main-es5.js" nomodule defer></script></body>
</html>

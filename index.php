<?php
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
?>
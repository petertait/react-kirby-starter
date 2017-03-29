<?php snippet('header') ?>

  <main class="main" role="main">

    <div class="wrap">

      <header>
        <h1><?= $page->title()->html() ?></h1>
        <div class="intro text">
          <?= $page->intro()->kirbytext() ?>
        </div>
        <hr />
      </header>

      <div class="text">
        <?= $page->text()->kirbytext() ?>
      </div>

    </div>

  </main>

<?php snippet('footer') ?>

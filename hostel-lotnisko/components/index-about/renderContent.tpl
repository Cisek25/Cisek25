{function name=renderContent}
  {if $sect['type'] == 'html'}
    {$sect['text']}
  {elseif $sect['type'] == 'text'}
    <div class="{$class} mb-5">
    {$sect['text']}
    </div>
  {elseif $sect['type'] == 'text_and_photo'}
  <div class="{$class} row mb-5">
    <div class="col-12 col-md-6 mb-3 mb-md-0">
      {$sect['text']}
    </div>
    <div class="col-12 col-md-6">
      <img title="" data-src="{$sect['src']}">
    </div>
  </div>
  {elseif $sect['type'] == 'photo_and_text'}
    <div class="{$class} row mb-5">
      <div class="col-12 col-md-6 mb-3 mb-md-0">
        <img title="" data-src="{$sect['src']}">
      </div>
      <div class="col-12 col-md-6">
        {$sect['text']}
      </div>
    </div>
  {elseif $sect['type'] == 'photo'}
    <div class="{$class} row mb-5">
      <div class="col-12">
        <img title="" data-src="{$sect['src']}">
      </div>
    </div>
  {elseif $sect['type'] == 'double_photo'}
    <div class="{$class} row mb-5">
      <div class="col-12 col-md-6 mb-5 mb-md-0">
        <img title="" data-src="{$sect['src']}">
      </div>
      <div class="col-12 col-md-6">
        <img title="" data-src="{$sect['src2']}">
      </div>
    </div>
  {elseif $sect['type'] == 'js'}
    <script>
      {$sect['text']}
    </script>
  {elseif $sect['type'] == 'video'}
      <div class="{$class} row mb-5">
        <div class="col-12 video-responsive">
          <iframe scrolling="no" width="560" height="315" src="{$sect['src']}" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
        </div>
      </div>
  {/if}
{/function}


{function name=renderContentMain}
  {if $sect['type'] == 'html'}
    <div class="section fp-auto-height pb-5">
      <div class="section_sub container">
        {$sect['text']}
      </div>
    </div>
  {elseif $sect['type'] == 'text'}
    <div class="section fp-auto-height pb-5">
      <div class="section_sub container">
      {$sect['text']}
      </div>
    </div>
  {elseif $sect['type'] == 'text_and_photo'}
    <div class="section fp-auto-height pb-5">
      <div class="section_sub container">
        <div class="row">
          <div class="col-12 col-md-6 mb-3 mb-md-0">
            {$sect['text']}
          </div>
          <div class="col-12 col-md-6">
            <img title="" src="{$sect['src']}">
          </div>
        </div>
      </div>
    </div>
  {elseif $sect['type'] == 'photo_and_text'}
  <div class="section fp-auto-height pb-5">
    <div class="section_sub container">
      <div class="row">
        <div class="col-12 col-md-6 mb-3 mb-md-0">
          <img title="" src="{$sect['src']}">
        </div>
        <div class="col-12 col-md-6">
          {$sect['text']}
        </div>
      </div>
    </div>
  </div>
  {elseif $sect['type'] == 'photo'}
  <div class="section fp-auto-height pb-5">
    <div class="section_sub container">
      <div class="row">
        <div class="col-12">
          <img title="" src="{$sect['src']}">
        </div>
      </div>
    </div>
  </div>
  {elseif $sect['type'] == 'double_photo'}
  <div class="section fp-auto-height pb-5">
    <div class="section_sub container">
      <div class="row">
        <div class="col-12 col-md-6 mb-5 mb-md-0">
          <img title="" src="{$sect['src']}">
        </div>
        <div class="col-12 col-md-6">
          <img title="" src="{$sect['src2']}">
        </div>
      </div>
    </div>
  </div>
  {elseif $sect['type'] == 'js'}
    <script>
      {$sect['text']}
    </script>
  {elseif $sect['type'] == 'video'}
  <div class="section fp-auto-height pb-5">
    <div class="section_sub container">
      <div class="row">
        <div class="col-12 video-responsive">
          <iframe scrolling="no" width="560" height="315" src="{$sect['src']}" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
        </div>
      </div>
    </div>
  </div>
  {/if}
{/function}



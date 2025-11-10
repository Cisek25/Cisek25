{if isset($useGoogleAnalytics4) and $useGoogleAnalytics4 == 1}
  <script async src='https://www.googletagmanager.com/gtag/js?id={$googleAnalytics4Id}'></script>
  <script>
    {literal}window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());
    gtag('config', '{/literal}{$googleAnalytics4Id}{literal}');{/literal}
  </script>
  {if $action == 'offers'}
    <script>
      gtag('event', 'view_item_list', {
        'items': [
          {foreach from=$objectsAndOffersWithPriority item=object}
            {
              'item_id': "{$object['id']}",
              "item_name": "{$object['name']}",
              {if $object['objectPrices']['priceMin'] != '0'}
                "price": "{$object['objectPrices']['priceMinInFormat']}",
              {/if}
            },
          {/foreach}
        ]
      });
    </script>
  {/if}
  {if $action == 'offer'}
    <script>
      gtag('event', 'view_item', {
        'currency': "{$currentCurrency['id']}",
        'value': "{$object['priceMinInFormat']}",
        'items': [
          {
            'item_id': "{$object['id']}",
            "item_name": "{$object['name']}",
            {if $object['priceMin'] != '0'}
              "price": "{$object['priceMinInFormat']}",
            {/if}
          }
        ]
      });
    </script>
  {/if}
{/if}
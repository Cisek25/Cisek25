{if isset($data.googleTagManagerId) and $data.googleTagManagerId}
    {if isset($part)}
        {if ($part == 1)}
            <script>
                (function(w, d, s, l, i) {
                    w[l] = w[l] || [];
                    w[l].push({
                        'gtm.start': new Date().getTime(),
                        event: 'gtm.js'
                    });
                    var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s),
                        dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true;
                    j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                    f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', 'GTM-{$data.googleTagManagerId}');
            </script>
        {/if}
        {if ($part == 2)}
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-{$data.googleTagManagerId}" height="0" width="0" style="display: none; visibility: hidden"></iframe>
            </noscript>
        {/if}
    {else}
        <script>
            (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-{$data.googleTagManagerId}');
        </script>
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-{$data.googleTagManagerId}" height="0" width="0" style="display: none; visibility: hidden"></iframe>
        </noscript>
    {/if}
{/if}
<div class="additional_info">
<h2 class="label">{$TXT.DodatkoweInformacjeDlaRezerwujacych}:</h2>
<ul class="addonsList">
    <li>
        <span>{$TXT.Telefon}: </span>
        <div>
            <a href="tel:{$object['phone']}"><strong>{$object['phone']}</strong></a>
            {if ($object['phone2'])}
                {if $object['phone2'] != '.'}
                    <a href="tel:{$object['phone2']}"><strong>{$object['phone2']}</strong></a>
                {/if}
            {/if}
        </div>
    </li>
    {if ($object['fax'])}
        <li>
            <span>{$TXT.Fax}: </span>
            <div>
                <a href="tel:{$object['fax']}"><strong>{$object['fax']}</strong></a>
            </div>
        </li>
    {/if}

    <li>
        <span>{$TXT.Email}: </span>
        <div>
            <a href="mailto:{$object['email']}"><strong>{$object['email']}</strong></a>
        </div>
    </li>

    {if $object['skype']}
        <li>
            <span>{$TXT.Skype}: </span>
            <div>
                <a href="skype:{$object['skype']}"><strong>{$object['skype']}</strong></a>
            </div>
        </li>
    {/if}
</ul>
</div>
{include file="header.tpl"}
{strip}   
<main id="pageContent" class="page">
    {call name=inccomp file="distinguished" s=false}
    {if isset($promotedOffers) && isset($positionPromotedOffers) && $positionPromotedOffers == 0}
        {call name=renderHotspot hotspotOffers=$promotedOffers namePromotedOffers=$namePromotedOffers hotspotName='WyroznioneOferty' hotspotClass='top'}
    {/if}
    <div class="container">
        <div class="row">
            <div class="aside col-12 col-md-3 col-lg-3">            
                {call name=inccomp file="widget-search" s=false}                
                {if $filters}   
                    {call name=inccomp file="filters" s=false} 
                {/if}                                                                
                {call name=inccomp file="side-map" s=false}                                    
                {if array_key_exists('InformacjaOSposobachPlatnosci', $TXT)}      
                    {call name=inccomp file="side-payments" s=false}    
                {/if}     
            </div>
            <div class="col-12 col-md-9 col-lg-9">    	
                <div class="offers_content" id="offers_list">
                    {* accommodation *}
                        <h1 class="big-label">
                            {$ownerData['object_short_name']}
                            {if $filtersInfo['numberOfAllElements'] > 0}
                                <small class="ml-3">{$filtersInfo['numberOfAllElements']}</small>
                            {/if}
                            <small class="ml-1">
                                {if $filtersInfo['numberOfAllElements'] == '0'}
                                    {$TXT.BrakOfert}
                                {elseif $filtersInfo['numberOfAllElements'] == '1'}
                                    {$TXT.Oferta}
                                {elseif $filtersInfo['numberOfAllElements'] > '1' && $filtersInfo['numberOfAllElements'] < '5'}
                                    {$TXT.Oferty}
                                {elseif $filtersInfo['numberOfAllElements'] > '4'}
                                    {$TXT.Ofert}
                                {/if}
                            </small>
                        </h1>        
                        {call name=inccomp file="offers-list" s=false}                         
                </div>
            </div>
        </div>
    </div>
    {if isset($promotedOffers) && isset($positionPromotedOffers) && $positionPromotedOffers == 1}
        {call name=renderHotspot hotspotOffers=$promotedOffers namePromotedOffers=$namePromotedOffers hotspotName='WyroznioneOferty' hotspotClass='bottom'}
    {/if}
</main>
{/strip}
{include file="footer.tpl"}
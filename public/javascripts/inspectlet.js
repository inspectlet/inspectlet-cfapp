CloudFlare.define("inspectlet", ["inspectlet/config"], function(config){
    
    window.__insp = window.__insp || [];
    __insp.push(['wid', config && config.domain_id]);
    (function() {
        function __ldinsp(){var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://www.inspectlet.com/inspectlet.js'; var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); }
        if (window.attachEvent){
            window.attachEvent('onload', __ldinsp);
        }else{
            window.addEventListener('load', __ldinsp, false);
        }
    })();
    
});
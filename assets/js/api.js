
      $(document).ready(function(){
        
        $('ul.site-main-menu li a').click(function(){
          
          var tab_id = $(this).attr('data-tab');

          $('ul.site-main-menu li').removeClass('active');
          $('.pt-page').removeClass('pt-page-current');

          $(this).parent().addClass('active');
          $("#"+tab_id).addClass('pt-page-current');
        });

      });


/* PLEASE DO NOT COPY AND PASTE THIS CODE. */(function(){var w=window,C='___grecaptcha_cfg',cfg=w[C]=w[C]||{},N='grecaptcha';var gr=w[N]=w[N]||{};gr.ready=gr.ready||function(f){(cfg['fns']=cfg['fns']||[]).push(f);};(cfg['enterprise']=cfg['enterprise']||[]).push(false);(cfg['render']=cfg['render']||[]).push('onload');w['__google_recaptcha_client']=true;var d=document,po=d.createElement('script');po.type='text/javascript';po.async=true;po.src='https://www.gstatic.com/recaptcha/releases/PRkVene3wKrZUWATSylf69ja/recaptcha__en.js';var e=d.querySelector('script[nonce]'),n=e&&(e['nonce']||e.getAttribute('nonce'));if(n){po.setAttribute('nonce',n);}var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(po, s); })();
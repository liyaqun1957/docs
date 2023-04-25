import{_ as g,a as k}from"./token2-d7d9e55a.js";import{_}from"./aliyundrive-2cb15386.js";import{c as v,r as u,M as w,X as A,P as e,a0 as t,Q as i,a6 as n,O as r,aj as x,G as l,_ as C}from"./framework-f837dd26.js";const O=e("h1",{id:"aliyundrive-open",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#aliyundrive-open","aria-hidden":"true"},"#"),t(" Aliyundrive Open")],-1),S=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"Tips"),e("p",null,"Aliyundrive Open, using the official authorization API development.")],-1),D={class:"hint-container danger"},I=e("p",{class:"hint-container-title"},"Read the precautions carefully",-1),z=e("li",null,[e("mark",null,[t("The refresh token obtained by this tool can only be used for "),e("strong",null,"Aliyundrive open platform"),t(" storage mount method")])],-1),T=e("li",null,"The token filled in when Alist is mounted should also be provided by this tool, and the previous acquisition method will not be available",-1),q=e("li",null,"Not applicable to others, but only for Alist",-1),P=e("strong",null,"TooManyRequests",-1),E=e("ul",null,[e("li",null,"For example, a request is counted when saving/editing, and viewing a file or watching a video download is not counted."),e("li",null,"The number of times and time mentioned above are dynamic~")],-1),L=e("h2",{id:"refresh-token",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#refresh-token","aria-hidden":"true"},"#"),t(" refresh token")],-1),M={href:"https://alist.nn.ci/tool/aliyundrive/request",target:"_blank",rel:"noopener noreferrer"},Q=e("h4",{id:"get-example-graph",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get-example-graph","aria-hidden":"true"},"#"),t(" Get example graph")],-1),R=e("p",null,[e("strong",null,"refresh_token"),t(" can be obtained in the following two ways")],-1),B=e("p",null,[e("img",{src:g,alt:"token"})],-1),F=e("p",null,[e("img",{src:k,alt:"token"})],-1),G=e("h3",{id:"root-folder-file-id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#root-folder-file-id","aria-hidden":"true"},"#"),t(" Root folder file_id")],-1),N={href:"https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940",target:"_blank",rel:"noopener noreferrer"},H=x('<p>which is <code>5fe01e1830601baf774e4827a9fb8fb2b5bf7940</code></p><p><img src="'+_+'" alt="file_id"></p><h3 id="client-id-client-secret" tabindex="-1"><a class="header-anchor" href="#client-id-client-secret" aria-hidden="true">#</a> Client id，Client secret</h3><p>Normal users don’t need to fill in the blank. If they apply for official authorization, they can also use their own to fill in. If it is blank, the default is to use the one provided by Alist.</p><h2 id="remove-way" tabindex="-1"><a class="header-anchor" href="#remove-way" aria-hidden="true">#</a> Remove way</h2><ul><li>Trash: Enter the cloud disk recycle bin after AList is deleted, which will occupy the cloud disk space, but it can be retrieved if it is deleted by mistake later.</li><li>Delete: Direct deletion will not stay in the recycle bin and will not take up cloud disk space, but if it is deleted by mistake later, it cannot be retrieved. <ul><li>Note: Please do not disclose the Token obtained by your Alibaba Cloud Disk Open, <mark>If you accidentally leak it, please immediately go to <a href="#Open%20Alibaba%20Cloud%20Disk%20APP%20--%3E%20My%20--%3E%20Settings%20gear%20in%20the%20upper%20right%20corner%20--%3E%20Privacy%20Settings%20--%3E%20Authorization%20Management%20--%3E%20Click%20AList%20to%20view"><strong>Other instructions¹</strong></a> to deauthorize, and then re-scan the code to authorize a new refresh token , at the same time, all the previous acquisitions will become invalid after the authorization is deactivated, so as to protect the security of your account</mark></li></ul></li></ul><h2 id="other-instructions" tabindex="-1"><a class="header-anchor" href="#other-instructions" aria-hidden="true">#</a> other instructions</h2><p>one、</p><blockquote><p>AList only obtained cloud disk users (<strong>name avatar¹</strong>), (<strong>access file permission²</strong>) and (<strong>write file permission³</strong>), and did not obtain mobile phone number permission</p><p>Details can be viewed in two ways:</p><ol><li><p><strong>Prompt</strong> when scanning the QR code to obtain the refresh token</p></li><li><h6 id="open-alibaba-cloud-disk-app-my-settings-gear-in-the-upper-right-corner-privacy-settings-authorization-management-click-alist-to-view" tabindex="-1"><a class="header-anchor" href="#open-alibaba-cloud-disk-app-my-settings-gear-in-the-upper-right-corner-privacy-settings-authorization-management-click-alist-to-view" aria-hidden="true">#</a> Open <strong>Alibaba Cloud Disk APP --&gt; My --&gt; Settings gear in the upper right corner --&gt; Privacy Settings --&gt; Authorization Management --&gt; Click AList</strong> to view</h6><ul><li>If you don&#39;t use it, you can manually cancel the permission at any time</li></ul></li></ol></blockquote><p>two、</p><blockquote><p>By default, the built-in player of Aliyun Disk is used - <strong>Aliyun Video Previewer</strong></p><p>The video uploaded to the cloud disk will be converted into an H.264 encoded video stream through the transcoding service. (The good thing is that IOS can play... well, it should be like this)</p><ul><li>For videos newly uploaded to the cloud disk, only the first 30s of the video are pre-transcoded by default. Full video transcoding is triggered on first playback. The transcoded video will be cached, and re-transcoding is not required to trigger playback again.</li><li>Videos shorter than 30s will not trigger pre-transcoding, and will only start transcoding when they are played for the first time.</li><li>Real-time transcoding takes some time.</li><li>The picture quality are: LD|SD|HD|FHD|QHD</li></ul></blockquote><p>three、</p>',12),V=e("li",null,[e("p",null,[t("If the Alibaba cloud disk you mounted is Open, after restarting, reloading, and updating, you will find a prompt "),e("strong",null,"TooManyRequests")])],-1),W=e("p",null,"Another problem, if the Alibaba Cloud Disk Open you mounted is a cloud disk account, and then mounted different folders to the account and added multiple accounts, resulting in too many Alibaba Cloud Open accounts added, this is a good solution",-1),X=e("strong",null,"alias",-1),Y=e("p",null,"Four、",-1),K=e("blockquote",null,[e("p",null,"Q: Why can’t Alibaba Cloud Disk Open see files of the Office Family Bucket type?"),e("p",null,"A: Because Aliyun disk has not opened the relevant API, it is temporarily unavailable to view")],-1),U=e("h3",{id:"the-default-download-method-used",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-default-download-method-used","aria-hidden":"true"},"#"),t(" The default download method used")],-1),j=v({__name:"aliyundrive_open.html",setup(Z){const a=u("unknown"),o=u("unknown");return typeof fetch<"u"&&(async()=>{const s=await(await fetch("https://api.nn.ci/alist/ali_open/limit")).json();a.value=s.minutes,o.value=s.max})(),(c,s)=>{const d=l("ExternalLinkIcon"),h=l("Tabs"),p=l("RouterLink"),m=l("Mermaid");return w(),A("div",null,[O,S,e("div",D,[I,e("ol",null,[z,T,q,e("li",null,[t("If the same IP requests "),e("mark",null,i(o.value),1),t(" times within "),e("mark",null,i(a.value),1),t(" minutes, "),P,t(" will appear. 🚫So please do not abuse🚫 "),E])])]),L,e("p",null,[t("Go to："),e("strong",null,[e("a",M,[t("https://alist.nn.ci/tool/aliyundrive/request"),n(d)])])]),Q,R,n(h,{id:"57",data:[{title:"Go to login"},{title:"Scan QrCoden"}],"tab-id":"alitoken"},{tab0:r(({title:f,value:b,isActive:y})=>[B]),tab1:r(({title:f,value:b,isActive:y})=>[F]),_:1}),G,e("p",null,[t("Open the official website of Aliyundrive and click the string behind the url when you click into the folder you want to set, such as "),e("a",N,[t("https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940"),n(d)])]),H,e("blockquote",null,[e("ul",null,[V,e("li",null,[e("p",null,[t("Check whether your account exceeds the number mentioned in the note in the red prompt at the top, that is, the number of open Alibaba Cloud disks you added > "),e("mark",null,i(o.value),1)])]),e("li",null,[e("p",null,[t("The solution is to disable all the mounted Alibaba cloud disk Open, wait for "),e("mark",null,i(a.value),1),t(" minutes, and then click one by one to enable the number not to exceed "),e("mark",null,i(o.value),1),t(" times, and then wait "),e("mark",null,i(a.value),1),t(" After a few minutes, click to open again, and it will recover slowly.")])]),e("li",null,[e("p",null,[t("(Whispering reminder: If you have more than a dozen accounts, it’s okay, it’s not a big problem to restore "),e("mark",null,i(o.value),1),t(" one at a time. If you have 30 or 50 accounts, it is recommended that you restore about 4 each time , because it will help you refresh the refresh token every 2 hours, and it will also be called to prevent you from causing GG too many times...)")])]),e("li",null,[W,e("ul",null,[e("li",null,[t("Solution: Go to the official page of Alibaba Cloud Disk and integrate all the folders you need to mount into one folder, then only mount the integrated folder, and then pass "),n(p,{to:"/guide/advanced/alias.html"},{default:r(()=>[X]),_:1}),t(" are mounted separately, just write one for each path, so that a single path can be mounted and displayed separately. Of course, you can also integrate multiple ones together, or use it directly. Example 3 to show different ones can also be")])])])]),e("p",null,[t("If you add more than "),e("mark",null,i(o.value),1),t(" to one account and one network disk, then you can only restore it slowly by starting.")])]),Y,K,U,n(m,{id:"mermaid-231",code:"eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"})])}}}),ie=C(j,[["__file","aliyundrive_open.html.vue"]]);export{ie as default};

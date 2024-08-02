let platforms = [
        {
            "name": "Google Ads",
            "description": "A plataforma de publicidade do Google que permite criar anúncios pagos para serem exibidos nos resultados de pesquisa do Google e em sua rede de display.",
            "api_link": "https://developers.google.com/google-ads/api",
            "documentation_link": "https://developers.google.com/google-ads/api/docs/start",
            "access": {
                "client_id": "YOUR_CLIENT_ID",
                "client_secret": "YOUR_CLIENT_SECRET",
                "refresh_token": "YOUR_REFRESH_TOKEN",
                "developer_token": "YOUR_DEVELOPER_TOKEN",
                "bearer_token": "YOUR_BEARER_TOKEN"
            }
        },
        {
            "name": "Facebook Ads",
            "description": "A ferramenta de publicidade do Facebook que permite criar anúncios para serem exibidos no Facebook, Instagram, Messenger e Audience Network.",
            "api_link": "https://developers.facebook.com/docs/marketing-apis/",
            "documentation_link": "https://developers.facebook.com/docs/marketing-apis/",
            "access": {
                "app_id": "YOUR_APP_ID",
                "app_secret": "YOUR_APP_SECRET",
                "access_token": "YOUR_ACCESS_TOKEN",
                "bearer_token": "YOUR_BEARER_TOKEN"
            }
        },
        {
            "name": "Instagram Ads",
            "description": "Integra-se com o Facebook Ads Manager e permite criar anúncios para serem exibidos no Instagram.",
            "api_link": "https://developers.facebook.com/docs/instagram-api",
            "documentation_link": "https://developers.facebook.com/docs/instagram-api",
            "access": {
                "app_id": "YOUR_APP_ID",
                "app_secret": "YOUR_APP_SECRET",
                "access_token": "YOUR_ACCESS_TOKEN",
                "bearer_token": "YOUR_BEARER_TOKEN"
            }
        },
        {
            "name": "Twitter Ads",
            "description": "A plataforma de publicidade do Twitter que permite promover tweets e contas para alcançar uma audiência mais ampla.",
            "api_link": "https://developer.twitter.com/en/docs/ads-api",
            "documentation_link": "https://developer.twitter.com/en/docs/ads-api",
            "access": {
                "api_key": "YOUR_API_KEY",
                "api_secret_key": "YOUR_API_SECRET_KEY",
                "access_token": "YOUR_ACCESS_TOKEN",
                "access_token_secret": "YOUR_ACCESS_TOKEN_SECRET",
                "bearer_token": "YOUR_BEARER_TOKEN"
            }
        },
        {
            "name": "LinkedIn Ads",
            "description": "A ferramenta de publicidade do LinkedIn que permite criar anúncios segmentados para profissionais e empresas.",
            "api_link": "https://docs.microsoft.com/en-us/linkedin/marketing/",
            "documentation_link": "https://docs.microsoft.com/en-us/linkedin/marketing/",
            "access": {
                "client_id": "YOUR_CLIENT_ID",
                "client_secret": "YOUR_CLIENT_SECRET",
                "access_token": "YOUR_ACCESS_TOKEN",
                "bearer_token": "YOUR_BEARER_TOKEN"
            }
        },
        {
            "name": "Pinterest Ads",
            "description": "A plataforma de publicidade do Pinterest que permite criar anúncios visuais para alcançar usuários que estão planejando compras.",
            "api_link": "https://developers.pinterest.com/docs/redoc/pinterest-api/",
            "documentation_link": "https://developers.pinterest.com/docs/getting-started/introduction/",
            "access": {
                "app_id": "YOUR_APP_ID",
                "app_secret": "YOUR_APP_SECRET",
                "access_token": "YOUR_ACCESS_TOKEN",
                "bearer_token": "YOUR_BEARER_TOKEN"
            }
        },
        {
            "name": "TikTok Ads",
            "description": "A plataforma de publicidade do TikTok que permite criar anúncios de vídeo curtos para alcançar uma audiência jovem e engajada.",
            "api_link": "https://ads.tiktok.com/marketing_api/docs",
            "documentation_link": "https://ads.tiktok.com/marketing_api/docs",
            "access": {
                "app_id": "YOUR_APP_ID",
                "app_secret": "YOUR_APP_SECRET",
                "access_token": "YOUR_ACCESS_TOKEN",
                "bearer_token": "YOUR_BEARER_TOKEN"
            }
        },
        {
            "name": "Snapchat Ads",
            "description": "A ferramenta de publicidade do Snapchat que permite criar anúncios de vídeo curtos para serem exibidos entre Stories e na seção Discover.",
            "api_link": "https://businesshelp.snapchat.com/s/api-category/aac14c4e09bb/api",
            "documentation_link": "https://businesshelp.snapchat.com/s/api-category/aac14c4e09bb/api",
            "access": {
                "client_id": "YOUR_CLIENT_ID",
                "client_secret": "YOUR_CLIENT_SECRET",
                "access_token": "YOUR_ACCESS_TOKEN",
                "bearer_token": "YOUR_BEARER_TOKEN"
            }
        }
    ];

function createPlatformElement(platform, index) {
    const container = document.createElement('div');
    container.className = 'platform';
    container.innerHTML = `
        <label>Name</label>
        <input type="text" value="${platform.name}" oninput="updatePlatform(${index}, 'name', this.value)">
        <label>Description</label>
        <input type="text" value="${platform.description}" oninput="updatePlatform(${index}, 'description', this.value)">
        <label>API Link</label>
        <input type="text" value="${platform.api_link}" oninput="updatePlatform(${index}, 'api_link', this.value)">
        <label>Documentation Link</label>
        <input type="text" value="${platform.documentation_link}" oninput="updatePlatform(${index}, 'documentation_link', this.value)">
        <label>Client ID</label>
        <input type="text" value="${platform.access.client_id}" oninput="updateAccess(${index}, 'client_id', this.value)">
        <label>Client Secret</label>
        <input type="text" value="${platform.access.client_secret}" oninput="updateAccess(${index}, 'client_secret', this.value)">
        <label>Refresh Token</label>
        <input type="text" value="${platform.access.refresh_token}" oninput="updateAccess(${index}, 'refresh_token', this.value)">
        <label>Developer Token</label>
        <input type="text" value="${platform.access.developer_token}" oninput="updateAccess(${index}, 'developer_token', this.value)">
        <label>Bearer Token</label>
        <input type="text" value="${platform.access.bearer_token}" oninput="updateAccess(${index}, 'bearer_token', this.value)">
    `;
    return container;
}

function renderPlatforms() {
    const container = document.getElementById('platforms-container');
    container.innerHTML = '';
    platforms.forEach((platform, index) => {
        container.appendChild(createPlatformElement(platform, index));
    });
}

function updatePlatform(index, key, value) {
    platforms[index][key] = value;
}

function updateAccess(index, key, value) {
    platforms[index].access[key] = value;
}

function addPlatform() {
    platforms.push({
        "name": "",
        "description": "",
        "api_link": "",
        "documentation_link": "",
        "access": {
            "client_id": "",
            "client_secret": "",
            "refresh_token": "",
            "developer_token": "",
            "bearer_token": ""
        }
    });
    renderPlatforms();
}

function saveToJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ ads_platforms: platforms }, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "ads_platforms.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

document.addEventListener('DOMContentLoaded', renderPlatforms);

<script lang="ts">

    // import AboutUs from "$lib/app-components/home-components/about-us/about-us.svelte";
    // import Activities from "$lib/app-components/home-components/activities/activities.svelte";
    // import Intro from "$lib/app-components/home-components/intro/intro.svelte";
    // import { persistHomeDataStore } from "$lib/app-components/home-components/helpers/home.stores";
    // import type { HomeModel } from "$lib/app-components/home-components/helpers/home.firestore.helpers";
        // import type { PageServerData } from "./$types";

    // let homeModel:HomeModel;



    let data = {
        companyName: 'Waterburg Safaris',
        companyDescription: 'Waterburg Safaris & Investments (Pty) Ltd is formed to provision of tourism services such as guided safari tours (mobile tented camping safaris tours to all the game reserves and national parks of Botswana, Chobe National Park, Savute, Okavango Delta moremi Khwai and xakanaxa), nxai pan, Kgalagadi, mabuasehube game reserve), day trips into chobe national park, Mighty Victoria Falls Daytrips in Zimbabwe, Boat cruise in chobe river and transfers to various places.'
    };

    $:({companyName ,companyDescription}=data );

    // $:console.log(aboutCompany!);




    // persistHomeDataStore.subscribe((homeData=>{
    //    return homeModel=homeData ;

    // }));
    // $:console.log('sets',homeActivities![0].activityDetails != null ? homeActivities![0].activityDetails :'shhs');
    </script>


    <svelte:head>
        <title>Home-Waterburg Safaris, best safari out there</title>
        <meta name="description" content="Welcome to Waterburg Safaris. Waterburg Safaris & Investments (Pty)
         Ltd is formed to provision of tourism services such as guided safari tours (mobile tented camping safaris
          tours to all the game reserves and national parks of Botswana, Chobe National Park, Savute, Okavango Delta
           moremi Khwai and xakanaxa), nxai pan, Kgalagadi, mabuasehube game reserve), day trips into chobe national
            park, Mighty Victoria Falls Daytrips in Zimbabwe, Boat cruise in chobe river and transfers to various places.">
            <!-- <script src="https://kit.fontawesome.com/d20804bf75.js" crossorigin="anonymous"></script> -->
            <html lang='en' />
    </svelte:head>

<!--
    <Intro homeModel={data.homeData}/>
    <AboutUs/>
    {#if homeActivities}
    <Activities {homeActivities} />
    {:else}
    <p>No data {aboutCompany?.companyId}</p>
    {/if} -->

<main>
    <h1 class="text-5xl bg-blue-500">{companyName}</h1>
    <p>{companyDescription}</p>
</main>

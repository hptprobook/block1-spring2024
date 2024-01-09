<?php

namespace App\Http\Controllers;

use Goutte\Client;
use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;

class CrawlController extends Controller
{
    public function crawl()
    {
        $client = new Client();
        $crawler = $client->request('GET', 'https://viblo.asia/newest');

        $crawler->filter('.post-feed h3 a')->each(function ($node) {
            print $node->text() . "\n";
        });
    }
}

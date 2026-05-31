---
layout: doc
layoutClass: m-nav-layout
permalink: /wzdh
sidebar: false
prev: false
next: false
---

<style src="/.vitepress/theme/style/nav.css"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/untils/data'
</script>


<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
---
theme: unc-theme
class: invert
transition: fade
header: '**UNC** - PMP et Prince 2'
paginate: true
marp: true
---

# Sommaire

1) Familles d'applications
2) Construire une application
3) Le Socle

---
# Familles d'applications

* Suite cocktail: scolarix, scolpeda, agrhum...
* Editeurs tiers: jira, confluence, moodle...
* Applications unc hors socle: reva, DOM, ipweb...
* Applications unc socle: tgw, importsup, dematia, toolbox, backoffice ipweb...

---


# technologies

Historiquement, les applications ont été développées de façon indépendantes avec des technologies hétérogènes

* difficultées de maintenances
* difficultées à faire évoluer
* difficultées pour récruter 
* Difficultées de réutilisation

----
<style scoped>
li {
  height: 350px;
  width: 350px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%; 
  background: lightgreen;
  color: #455a64;
  font-size: medium;
}

li::first-line{
 font-weight:bold;
 font-size: xx-large;
}

p:nth-of-type(2){
    right:250px;
    top:100px;
}

li:nth-of-type(3){
    right:250px;
    top:100px;
}

</style>
* Cocktail 
	Préinscriptions RDVweb
	Scolarix ScolPédagogie IP Web
	G-Spot Superplan GroupeScol
	EdtWEB Hcomp Mangue
	Hamac Annuaire Web Agrhum
	DOM Kiwi Carambole
	Bibasse Maracuja JefyAdmin
	Situations Cocoligth Corossol
	...


* Le Socle 
	TGW Toolbox
	webinscription Progressions
	Importsup 
	BackOffice-IpWeb
	Dematia Moodle Admin
	SiseWeb 
	Dossier Etudiant
	...


* Tiers
	Jira
	Confluence
	...


---
Le nouveau socle:

- homogène: même language, même process de livraison, même documentation etc.. pour tous les nouveaux projets
- réutilisable: composant d'authentification, les menus, la charte graphique
- automatisation maximum: moins d'erreurs humaines

----

# Le socle
## 3 environnements

- dev : pour la dsi
- test: pour les utilisateurs
- prod: production

----

## Connexion avec votre compte unc

![](https://i.imgur.com/LAFHym0.png)

----

## Le template des nouvelles applications

![](https://i.imgur.com/huZZvXG.png)

----

## Comment on fait un programme ?

```graphviz
digraph summary {
    code [label="Code source\n(fichier texte)",shape=note, style=filled, fillcolor=lightblue]
livrable [label="Application livrable\n(zip, jar...)",shape=box3d, style=filled, fillcolor=lightblue]
serveur [label="Serveur d'application",shape=cylinder, style=filled, fillcolor=lightblue]
  code ->livrable[label="  compilation"]
  livrable->serveur[label="  livraison"]
  ;
  
}
```

----

## L'usine l'ogicielle

Le but de l'usine logicielle est d'automatiser la compilation, les tests et la livraison.

![](https://i.imgur.com/vxPA5K6.png)

----

## Démo

----

## Avis / questions




export default {
  "meta": {},
  "id": "_default",
  "_regex": {},
  "_paramKeys": {},
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "asyncModule": () => import('./../src/routes/_module.svelte'),
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_child1",
      "_regex": {},
      "_paramKeys": {},
      "name": "child1",
      "module": false,
      "file": {
        "path": "src/routes/child1",
        "dir": "src/routes",
        "base": "child1",
        "ext": "",
        "name": "child1"
      },
      "children": [
        {
          "meta": {
            "reset": true
          },
          "id": "_default_child1_index_md",
          "_regex": {},
          "_paramKeys": {},
          "name": "index",
          "file": {
            "path": "src/routes/child1/index.md",
            "dir": "src/routes/child1",
            "base": "index.md",
            "ext": ".md",
            "name": "index"
          },
          "asyncModule": () => import('./../src/routes/child1/index.md'),
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_child2",
      "_regex": {},
      "_paramKeys": {},
      "name": "child2",
      "module": false,
      "file": {
        "path": "src/routes/child2",
        "dir": "src/routes",
        "base": "child2",
        "ext": "",
        "name": "child2"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_child2_index_md",
          "_regex": {},
          "_paramKeys": {},
          "name": "index",
          "file": {
            "path": "src/routes/child2/index.md",
            "dir": "src/routes/child2",
            "base": "index.md",
            "ext": ".md",
            "name": "index"
          },
          "asyncModule": () => import('./../src/routes/child2/index.md'),
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_index_md",
      "_regex": {},
      "_paramKeys": {},
      "name": "index",
      "file": {
        "path": "src/routes/index.md",
        "dir": "src/routes",
        "base": "index.md",
        "ext": ".md",
        "name": "index"
      },
      "asyncModule": () => import('./../src/routes/index.md'),
      "children": []
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true
      },
      "_regex": {},
      "_paramKeys": {},
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}

import '@roxi/routify/lib/buildtime/plugins/devHelper/runtime.js'
## @sahnee/clone

A dependency-free utility library for deep cloning plain objects.

## Installation

```
npm install @sahnee/clone
```

## Usage

This library is meant to clone simple JavaScript ojects. Everything more complex that a potato is not supported:

- Primitive types (Strings, Numbers, ...)
- Dates
- Objects
- Arrays

Whereas the object and arrays may only contain other supported values. When passed non supported data types this library
makes no guarantee about its behavior.

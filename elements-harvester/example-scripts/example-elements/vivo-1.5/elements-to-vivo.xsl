<?xml version="1.0" encoding="UTF-8"?>
<!--
 | Copyright (c) 2012 Symplectic Limited. All rights reserved.
 | This Source Code Form is subject to the terms of the Mozilla Public
 | License, v. 2.0. If a copy of the MPL was not distributed with this
 | file, You can obtain one at http://mozilla.org/MPL/2.0/.
 -->
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
                xmlns:bibo="http://purl.org/ontology/bibo/"
                xmlns:vivo="http://vivoweb.org/ontology/core#"
                xmlns:foaf="http://xmlns.com/foaf/0.1/"
                xmlns:score="http://vivoweb.org/ontology/score#"
                xmlns:ufVivo="http://vivo.ufl.edu/ontology/vivo-ufl/"
                xmlns:vitro="http://vitro.mannlib.cornell.edu/ns/vitro/0.7#"
                xmlns:api="http://www.symplectic.co.uk/publications/api"
                xmlns:symp="http://www.symplectic.co.uk/ontology/elements/"
                exclude-result-prefixes="rdf rdfs bibo vivo foaf score ufVivo vitro api symp xs"
        >

    <!--
        Import general utility and configuration XSLT files
    -->
    <xsl:import href="elements-to-vivo-config.xsl" />
    <xsl:import href="elements-to-vivo-datatypes.xsl" />
    <xsl:import href="elements-to-vivo-utils.xsl" />

    <!--
        Import XSLT for object and relationship transformations
    -->
    <xsl:import href="elements-to-vivo-activity.xsl" />
    <xsl:import href="elements-to-vivo-publication.xsl" />
    <xsl:import href="elements-to-vivo-relationship.xsl" />
    <xsl:import href="elements-to-vivo-user.xsl" />

    <xsl:output method="xml" indent="yes" />

    <!--
        Default template - matches the root, to output an RDF document tag around any RDF objects that are output
    -->
    <xsl:template match="/">
        <xsl:call-template name="render_rdf_document">
            <xsl:with-param name="rdfNodes">
                <xsl:apply-templates select="*" />
            </xsl:with-param>
        </xsl:call-template>
    </xsl:template>
</xsl:stylesheet>

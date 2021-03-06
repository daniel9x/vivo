/*******************************************************************************
 * Copyright (c) 2012 Symplectic Ltd. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ******************************************************************************/
package uk.co.symplectic.vivoweb.harvester.fetch;

import uk.co.symplectic.elements.api.ElementsObjectCategory;

public class ElementsObjectId {
    private ElementsObjectCategory category;
    private String id;

    public ElementsObjectId(ElementsObjectCategory category, String id) {
        this.category = category;
        this.id = id;
    }

    public ElementsObjectCategory getCategory() {
        return category;
    }

    public String getId() {
        return id;
    }
}

<?php
    foreach ($pages as $page => $name) {
        $selected = ($page == $current_page) ? 'selected' : '';
        echo "
                <a href=\"?p=$page\" class=\"$selected\">$name</a>";
    }
?>
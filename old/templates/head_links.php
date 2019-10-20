<?php
    foreach ($pages as $page => $name) {
        $selected = ($page == $current_page) ? 'selected' : '';
        echo "
                <a href=\"/$page\" class=\"$selected\">$name</a>";
    }
?>
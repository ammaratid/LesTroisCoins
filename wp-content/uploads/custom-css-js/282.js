<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 
document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.querySelector('.wpcf7 input[type="file"]');

    if (fileInput) {
        fileInput.addEventListener('change', function () {
            const file = this.files[0];
            if (file) {
                const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
                const maxSize = 2 * 1024 * 1024; // 2 Mo

                if (!allowedTypes.includes(file.type)) {
                    alert("❌ Seules les images JPG, PNG ou PDF sont autorisées.");
                    this.value = "";
                } else if (file.size > maxSize) {
                    alert("⚠️ Le fichier est trop volumineux (max 2MB).");
                    this.value = "";
                }
            }
        });
    }
});

</script>
<!-- end Simple Custom CSS and JS -->
